import React, { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  ChevronRight,
  Download,
  FileText,
  Layers3,
  Search,
} from "lucide-react";
import { fetchGstActDetail, fetchGstActsCatalog } from "../api/requests";

function LoadingState() {
  return (
    <div className="space-y-3 animate-pulse" aria-label="Loading GST Acts">
      <div className="h-12 rounded-md bg-slate-100" />
      <div className="grid gap-4 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <div className="h-72 rounded-md bg-slate-100" />
        <div className="h-72 rounded-md bg-slate-100" />
      </div>
    </div>
  );
}

function SectionContent({ section }) {
  return (
    <article id={section.id} className="scroll-mt-32 border-b border-slate-200 py-6 first:pt-0 last:border-0 last:pb-0">
      <div className="mb-4 flex items-start gap-3">
        <FileText className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
        <div>
          <p className="text-xs font-bold uppercase text-teal-700">{section.label}</p>
          <h3 className="mt-1 text-lg font-bold text-slate-900">{section.title}</h3>
        </div>
      </div>
      <div className="space-y-4 text-[15px] leading-7 text-slate-700">
        {section.content.map((paragraph, index) => (
          <p key={`${section.id}-${index}`} className="whitespace-pre-wrap">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

export default function GstActsExplorer({ activeLabel }) {
  const [catalog, setCatalog] = useState([]);
  const [act, setAct] = useState(null);
  const [selectedActId, setSelectedActId] = useState("");
  const [selectedChapterId, setSelectedChapterId] = useState("");
  const [selectedSectionId, setSelectedSectionId] = useState("");
  const [viewMode, setViewMode] = useState("chapter");
  const [keyword, setKeyword] = useState("");
  const [loadingCatalog, setLoadingCatalog] = useState(true);
  const [loadingAct, setLoadingAct] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoadingCatalog(true);
    fetchGstActsCatalog()
      .then((items) => {
        if (!active) return;
        setCatalog(Array.isArray(items) ? items : []);
        setSelectedActId(items?.[0]?.id || "");
      })
      .catch((fetchError) => {
        if (active) setError(fetchError.message || "Unable to load GST Acts");
      })
      .finally(() => {
        if (active) setLoadingCatalog(false);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!selectedActId) return undefined;
    let active = true;
    setLoadingAct(true);
    setError("");
    fetchGstActDetail(selectedActId)
      .then((item) => {
        if (!active) return;
        setAct(item);
        const firstChapter = item?.chapters?.[0];
        setSelectedChapterId(firstChapter?.id || "");
        setSelectedSectionId(firstChapter?.sections?.[0]?.id || "");
        setKeyword("");
      })
      .catch((fetchError) => {
        if (active) {
          setAct(null);
          setError(fetchError.message || "Unable to load the selected GST Act");
        }
      })
      .finally(() => {
        if (active) setLoadingAct(false);
      });
    return () => {
      active = false;
    };
  }, [selectedActId]);

  const selectedChapter = useMemo(
    () => act?.chapters?.find((chapter) => chapter.id === selectedChapterId) || act?.chapters?.[0] || null,
    [act, selectedChapterId]
  );

  const matchingSections = useMemo(() => {
    const sections = selectedChapter?.sections || [];
    const query = keyword.trim().toLowerCase();
    if (!query) return sections;
    return sections.filter((section) => section.searchableText.toLowerCase().includes(query));
  }, [keyword, selectedChapter]);

  const selectedSection =
    matchingSections.find((section) => section.id === selectedSectionId) || matchingSections[0] || null;

  const changeChapter = (chapterId) => {
    const chapter = act?.chapters?.find((item) => item.id === chapterId);
    setSelectedChapterId(chapterId);
    setSelectedSectionId(chapter?.sections?.[0]?.id || "");
  };

  const switchView = (mode) => {
    setViewMode(mode);
    if (mode === "section" && !selectedSectionId) {
      setSelectedSectionId(selectedChapter?.sections?.[0]?.id || "");
    }
  };

  return (
    <section className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <header className="border-b border-slate-200 px-5 py-5 sm:px-7">
        <p className="text-sm font-semibold text-blue-600">{activeLabel}</p>
        <div className="mt-2 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{act?.title || "GST Acts"}</h2>
            {act && (
              <p className="mt-1 text-sm text-slate-500">
                {act.sectionCount} sections across {act.chapters.length} {act.chapters.length === 1 ? "group" : "groups"}
              </p>
            )}
          </div>
          {act?.pdfUrl && (
            <a
              href={act.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-700"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Complete Act
            </a>
          )}
        </div>
      </header>

      <div className="border-b border-slate-200 bg-slate-50 px-5 py-5 sm:px-7">
        <div className="grid gap-4 xl:grid-cols-[minmax(16rem,1.4fr)_minmax(12rem,0.8fr)_minmax(14rem,1fr)]">
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase text-slate-600">Select Act</span>
            <select
              value={selectedActId}
              onChange={(event) => setSelectedActId(event.target.value)}
              className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            >
              {catalog.map((item) => (
                <option key={item.id} value={item.id}>{item.title}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase text-slate-600">Select Chapter</span>
            <select
              value={selectedChapter?.id || ""}
              onChange={(event) => changeChapter(event.target.value)}
              disabled={!act}
              className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-800 disabled:bg-slate-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            >
              {(act?.chapters || []).map((chapter) => (
                <option key={chapter.id} value={chapter.id}>{chapter.label}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase text-slate-600">Enter Keyword</span>
            <span className="relative block">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" aria-hidden="true" />
              <input
                type="search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                placeholder="Search sections or legal text"
                className="h-11 w-full rounded-md border border-slate-300 bg-white pl-10 pr-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </span>
          </label>
        </div>

        <div className="mt-4 flex items-center gap-1 rounded-md border border-slate-300 bg-white p-1 sm:w-fit" aria-label="View mode">
          <button
            type="button"
            onClick={() => switchView("chapter")}
            className={`flex flex-1 items-center justify-center gap-2 rounded px-3 py-2 text-sm font-semibold sm:flex-none ${viewMode === "chapter" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}
          >
            <Layers3 className="h-4 w-4" aria-hidden="true" /> View by Chapter
          </button>
          <button
            type="button"
            onClick={() => switchView("section")}
            className={`flex flex-1 items-center justify-center gap-2 rounded px-3 py-2 text-sm font-semibold sm:flex-none ${viewMode === "section" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" /> View by Section
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-7">
        {(loadingCatalog || loadingAct) && <LoadingState />}
        {!loadingCatalog && !loadingAct && error && (
          <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>
        )}
        {!loadingCatalog && !loadingAct && !error && act && (
          <div className="grid items-start gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
            <nav className="max-h-[68vh] overflow-y-auto border-r border-slate-200 pr-3" aria-label={viewMode === "chapter" ? "Act chapters" : "Act sections"}>
              {(viewMode === "chapter" ? act.chapters : matchingSections).map((item) => {
                const active = viewMode === "chapter" ? item.id === selectedChapter?.id : item.id === selectedSection?.id;
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => viewMode === "chapter" ? changeChapter(item.id) : setSelectedSectionId(item.id)}
                    className={`mb-1 flex w-full items-start justify-between gap-3 rounded-md px-3 py-3 text-left text-sm ${active ? "bg-blue-50 font-semibold text-blue-800" : "text-slate-700 hover:bg-slate-50"}`}
                  >
                    <span>
                      <span className="block">{item.label}</span>
                      <span className="mt-0.5 block text-xs font-normal text-slate-500">
                        {viewMode === "chapter" ? `${item.sectionCount} sections` : item.title}
                      </span>
                    </span>
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  </button>
                );
              })}
              {viewMode === "section" && matchingSections.length === 0 && (
                <p className="px-3 py-6 text-sm text-slate-500">No sections match this keyword.</p>
              )}
            </nav>

            <div className="min-w-0">
              <div className="mb-6 border-b border-slate-200 pb-4">
                <p className="text-xs font-bold uppercase text-blue-600">{selectedChapter?.label}</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  {viewMode === "chapter" ? selectedChapter?.title : selectedSection?.title || "No matching section"}
                </h3>
              </div>
              {viewMode === "chapter"
                ? matchingSections.map((section) => <SectionContent key={section.id} section={section} />)
                : selectedSection && <SectionContent section={selectedSection} />}
              {matchingSections.length === 0 && (
                <div className="py-12 text-center text-sm text-slate-500">No legal text matches “{keyword}”.</div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
