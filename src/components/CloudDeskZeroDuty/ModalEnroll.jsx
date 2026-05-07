import { ModalEnroll as SharedModalEnroll } from "../CloudDeskGSTFiling/ModalEnroll";

export const ModalEnroll = ({
  type = "epcg_scheme_enroll",
  actionType = "Enroll Now",
  source = "services/epcg-scheme",
  title = "Enroll Now",
  subtitle = "Join the CloudDesk Network",
  ...props
}) => (
  <SharedModalEnroll
    {...props}
    type={type}
    actionType={actionType}
    source={source}
    title={title}
    subtitle={subtitle}
  />
);
