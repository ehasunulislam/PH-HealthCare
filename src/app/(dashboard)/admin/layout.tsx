import { ReactNode } from "react";

export default function layout({children}: {children: ReactNode}) {
  return (
    <div>
      Admin layout {children}
    </div>
  );
}
