import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { MultiBackend, TouchTransition } from "react-dnd-multi-backend";

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend, // Desktop drag-and-drop
    },
    {
      backend: TouchBackend, // Mobile touch drag-and-drop
      options: { enableMouseEvents: true, preventScrollOnScroll: true }, 
      preview: true,
      transition: TouchTransition,
    },
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DndProvider>
  );
}
