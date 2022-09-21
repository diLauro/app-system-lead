import { ReactElement } from "react";

type Props = {
  children: ReactElement[];
};
export const Layout = ({ children }: Props) => {
  return <>{children}</>;
};
