import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  FileText,
  LayoutDashboard,
  AlertTriangle,
  CheckCircle2,
  Clock,
  MoreHorizontal,
  Globe,
} from "lucide-react";

import TopBar from "../Common/TopBar";
import { Footer } from "../Common/Footer";

/* ---------------- MOCK DATA ---------------- */

const generateMockEvents = (currentDate) => {
  const year = currentDate.getFullYear();
  const currentMonthIdx = new Date().getMonth();

  const events = [];

  for (let m = 0; m < 12; m++) {
    events.push(
      {
        id: Number(`10${m}1`),
        title: "GSTR-1 (Outward Supplies)",
        date: new Date(year, m, 11),
        type: "filing",
        risk: "high",
        region: "India",
        status: m < currentMonthIdx ? "completed" : "pending",
        authority: "GST",
      },
      {
        id: Number(`10${m}2`),
        title: "GSTR-3B (Summary Return)",
        date: new Date(year, m, 20),
        type: "filing",
        risk: "high",
        region: "India",
        status: m < currentMonthIdx ? "completed" : "pending",
        authority: "GST",
      }
    );
  }

  const taxMonths = [5, 8, 11, 2];
  taxMonths.forEach((m, idx) => {
    events.push({
      id: 200 + idx,
      title: `Advance Tax Installment #${idx + 1}`,
      date: new Date(m === 2 ? year + 1 : year, m, 15),
      type: "payment",
      risk: "high",
      region: "India",
      status: "pending",
      authority: "Income Tax",
    });
  });

  return events;
};

/* ---------------- HELPERS ---------------- */

const isSameDay = (d1, d2) =>
  d1.getFullYear() === d2.getFullYear() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getDate() === d2.getDate();

const getDaysInMonth = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }
  return days;
};

/* ---------------- COMPONENT ---------------- */

export default function ComplianceCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(generateMockEvents(currentDate));
  }, [currentDate]);

  const days = getDaysInMonth(currentDate);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getEventsForDay = (date) =>
    events.filter((e) => isSameDay(e.date, date));

  const selectedDayEvents = selectedDate ? getEventsForDay(selectedDate) : [];

  const prevMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );

  const nextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );

  const Badge = ({ children, className = "" }) => (
    <span
      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${className}`}
    >
      {children}
    </span>
  );

  const AuthorityBadge = ({ name }) => {
    const styles = {
      GST: "bg-indigo-100 text-indigo-700",
      DGFT: "bg-blue-100 text-blue-700",
      Customs: "bg-slate-100 text-slate-700",
      "Income Tax": "bg-green-100 text-green-700",
      MCA: "bg-orange-100 text-orange-700",
      FSSAI: "bg-rose-100 text-rose-700",
    };

    return <Badge className={styles[name]}>{name}</Badge>;
  };

  return (
    <div className="min-h-screen bg-slate-50 p-0">
      <TopBar />
      {/* HEADER */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">
                  Total Trade Compliance
                </span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Compliance Calendar
              </h2>
              <p className="mt-2 text-slate-500 max-w-2xl">
                Monitor critical filing deadlines for GST, DGFT, Customs, and
                FSSAI. Missing dates may result in penalties up to{" "}
                <span className="font-semibold text-red-600">
                  500% of goods value
                </span>
                .
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-3">
              <button className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
                <Filter className="mr-2 h-4 w-4 text-slate-500" />
                Filter View
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <FileText className="mr-2 h-4 w-4" />
                Enroll New Service
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Calendar Widget */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-800">
                    {currentDate.toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}
                  </h3>
                </div>

                <div className="flex items-center bg-white rounded-lg border border-slate-200 p-1 shadow-sm">
                  <button
                    onClick={prevMonth}
                    className="p-1.5 hover:bg-slate-100 rounded-md text-slate-600"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setCurrentDate(new Date())}
                    className="px-3 text-xs font-semibold text-slate-600"
                  >
                    Today
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-1.5 hover:bg-slate-100 rounded-md text-slate-600"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-7 gap-4 mb-4">
                  {weekDays.map((day) => (
                    <div
                      key={day}
                      className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-wider"
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {days.map((date, index) => {
                    if (!date)
                      return (
                        <div
                          key={`empty-${index}`}
                          className="h-24 md:h-28 bg-slate-50/30 rounded-lg"
                        />
                      );

                    const dayEvents = getEventsForDay(date);
                    const isSelected =
                      selectedDate && isSameDay(date, selectedDate);
                    const isToday = isSameDay(date, new Date());
                    const hasHighRisk = dayEvents.some(
                      (e) => e.risk === "high"
                    );

                    return (
                      <div
                        key={date.toISOString()}
                        onClick={() => setSelectedDate(date)}
                        className={`
                          relative h-24 md:h-28 rounded-lg border p-2 cursor-pointer transition-all duration-200 group
                          ${
                            isSelected
                              ? "border-blue-500 ring-1 ring-blue-500 bg-blue-50/50"
                              : isToday
                              ? "border-blue-200 bg-white shadow-sm ring-1 ring-blue-200"
                              : "border-slate-100 hover:border-blue-300 hover:shadow-md bg-white"
                          }
                        `}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span
                            className={`
                            text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full
                            ${
                              isToday
                                ? "bg-blue-600 text-white"
                                : "text-slate-600 group-hover:bg-slate-100"
                            }
                          `}
                          >
                            {date.getDate()}
                          </span>
                          {hasHighRisk && (
                            <div className="animate-pulse w-1.5 h-1.5 rounded-full bg-red-500" />
                          )}
                        </div>

                        <div className="space-y-1 overflow-hidden">
                          {dayEvents.slice(0, 2).map((event) => (
                            <div
                              key={event.id}
                              className={`
                                text-[9px] leading-tight px-1.5 py-0.5 rounded truncate font-medium
                                ${
                                  event.status === "completed"
                                    ? "bg-emerald-50 text-emerald-700 line-through decoration-emerald-700/50"
                                    : event.risk === "high"
                                    ? "bg-red-50 text-red-700"
                                    : "bg-slate-100 text-slate-700"
                                }
                            `}
                            >
                              {event.title}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-[9px] font-medium text-slate-400 pl-1">
                              +{dayEvents.length - 2} more
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>High
                  Risk
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Medium Risk
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>Low
                  Risk
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Stats */}
          <div className="lg:w-1/3 space-y-6">
            {/* Daily Agenda */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <LayoutDashboard className="h-4 w-4 text-blue-600" />
                  Daily Agenda
                </h3>
                {selectedDate && (
                  <span className="text-xs font-medium text-slate-500">
                    {selectedDate.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                )}
              </div>

              <div className="p-4 max-h-[500px] overflow-y-auto">
                {!selectedDate || selectedDayEvents.length === 0 ? (
                  <div className="text-center py-10">
                    <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="h-8 w-8 text-slate-300" />
                    </div>
                    <p className="text-slate-500 text-sm">
                      No filings due for this date.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {selectedDayEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`
                        relative p-3 rounded-lg border-l-4 transition-all hover:shadow-md
                        ${
                          event.risk === "high"
                            ? "border-l-red-500 bg-red-50/30"
                            : event.risk === "medium"
                            ? "border-l-amber-500 bg-amber-50/30"
                            : "border-l-blue-500 bg-blue-50/30"
                        }
                        border-t border-r border-b border-slate-100
                      `}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <AuthorityBadge name={event.authority} />
                          <button className="text-slate-400 hover:text-slate-600">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>

                        <h4 className="text-sm font-bold text-slate-900 mb-1">
                          {event.title}
                        </h4>

                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> Due 5:00 PM
                          </span>
                          {event.status === "extended" && (
                            <span className="flex items-center gap-1 text-amber-600 font-semibold bg-amber-50 px-1.5 py-0.5 rounded">
                              Extended Deadline
                            </span>
                          )}
                        </div>

                        {event.status === "completed" ? (
                          <div className="mt-2 flex items-center justify-center py-1.5 bg-emerald-100 text-emerald-700 rounded text-xs font-bold">
                            <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />{" "}
                            Filed Successfully
                          </div>
                        ) : (
                          <button className="mt-2 w-full py-1.5 bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 rounded text-xs font-semibold shadow-sm transition-colors">
                            Initiate Filing &rarr;
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Risk Dashboard Widget */}
            <div className="bg-slate-900 rounded-xl shadow-lg p-5 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>

              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                Risk Exposure
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                  <div className="text-xs text-slate-400 mb-1">
                    Pending Liability
                  </div>
                  <div className="text-xl font-bold text-white">₹ 2.4 Cr</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                  <div className="text-xs text-slate-400 mb-1">
                    Compliance Score
                  </div>
                  <div className="text-xl font-bold text-emerald-400">92%</div>
                </div>

                <div className="col-span-2 bg-gradient-to-r from-red-900/50 to-slate-800 p-3 rounded-lg border border-red-900/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-red-200 font-medium">
                      Critical Alert
                    </div>
                    <div className="text-sm font-bold text-white">
                      IEC Renewal Pending
                    </div>
                  </div>
                  <button className="text-xs bg-red-600 hover:bg-red-500 text-white px-3 py-1.5 rounded font-medium">
                    Fix Now
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-blue-800 uppercase">
                  Need Regulatory Help?
                </p>
                <p className="text-sm font-medium text-slate-600">
                  +91 74000 96950
                </p>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700">
                <Globe className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
