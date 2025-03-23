import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DndProvider } from "react-dnd";
import {
  MultiBackend,
  TouchTransition,
  MouseTransition,
} from "react-dnd-multi-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

const DnDBackends = {
  backends: [
    {
      backend: HTML5Backend, // Desktop (Mouse-based drag-and-drop)
      transition: MouseTransition,
      options: { enableMouseEvents: true, delay: 0 }, // No delay, faster response
    },
    {
      backend: TouchBackend, // Mobile (Touch-based drag-and-drop)
      options: { enableMouseEvents: true, preventScrollOnScroll: true },
      preview: false, // Disable custom preview for better performance
      transition: TouchTransition,
    },
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={MultiBackend} options={DnDBackends}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DndProvider>
  );
}
