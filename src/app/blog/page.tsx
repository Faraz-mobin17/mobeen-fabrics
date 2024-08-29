import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Page", // this will ignore the template defined in layout.tsx @home page
  },
  // title: "Blog Page", // this will not ignore the template defined in layout.tsx @home page
  description: "Blog Page",
};

export default function Blog() {
  return <div>Blog Page</div>;
}
