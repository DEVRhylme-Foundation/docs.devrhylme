// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Installation",
        href: "/installation",
      },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      {
        title: "Project Structure",
        href: "/project-structure",
      },
      {
        title: "Components",
        href: "/components",
        items: [
          { title: "Stepper", href: "/stepper" },
          { title: "Tabs", href: "/tabs" },
          { title: "Note", href: "/note" },
          { title: "Code Block", href: "/code-block" },
          { title: "Image & Link", href: "/image-link" },
          { title: "Custom", href: "/custom" },
        ],
      },
      { title: "Themes", href: "/themes" },
      {
        title: "Customize",
        href: "/customize",
      },
    ],
  },
  {
    title: "ForgeX",
    href: "/ForgeX/advanced-flag",
    noLink: true,
    items: [
      { title: "Advance Flag", href: "/advance-flag" },
      { title: "Docker", href: "/docker", },
      { title: "GO Releaser", href: "/go-releaser" },
      { title: "HTMX Template", href: "/htmx-template", },
      { title: "VITE", href: "/react-vite", },
      { title: "Tailwind", href: "/tailwind" },
      { title: "Web Socket", href: "/websocket", },
    ],
  },
  {
    title: "Supervision",
    href: "/supervision",
    noLink: true,
    items: [
      { title: "Classification", href: "/classification" },
      {
        title: "Datasets",
        href: "/datasets",
        noLink: true,
        items: [
          { title: "Core", href: "/core" },
          { title: "Utils", href: "/utils" },
        ]
      },
      {
        title: "Detection",
        href: "/detection",
        noLink: true,
        items: [
          { title: "Annotators", href: "/annotators" },
          { title: "Core", href: "/core" },
          { title: "Double Delection Filter", href: "/double_detection_filter" },
          { title: "Metrics", href: "/metrics" },
          {
            title: "Tools",
            href: "/tools",
            noLink: true,
            items: [
              { title: "Inference Slicer", href: "/inference_slicer" },
              { title: "Line Zone", href: "/line_zone" },
              { title: "Polygon Zone", href: "/polygon_zone" },
              { title: "Save Detections", href: "/save_detections" },
              { title: "Smoother", href: "/smoother" },
            ]
          },
          { title: "Utils", href: "/utils" },
        ]
      },
      {
        title: "How to",
        href: "/how_to",
        noLink: true,
        items: [
          { title: "Benchmark Model", href: "/benchmark_a_model" },
          { title: "Detect and Annotate", href: "/detect_and_annotate" },
          { title: "Detect Small Objects", href: "/detect_small_objects" },
          { title: "Filter Detections", href: "/filter_detections" },
          { title: "Process Datasets", href: "/process_datasets" },
          { title: "Save Detections", href: "/save_detections" },
          { title: "Track Objects", href: "/track_objects" },
        ]
      },
      {
        title: "Key Point",
        href: "/keypoint",
        noLink: true,
        items: [
          { title: "Annotators", href: "/annotators" },
          { title: "Core", href: "/core" },
        ]
      },
      {
        title: "Metrics",
        href: "/metrics",
        noLink: true,
        items: [
          { title: "Common Values", href: "/common_values" },
          { title: "F1 Score", href: "/f1_score" },
          { title: "Mean Average precision", href: "/mean_average_precision" },
          { title: "Mean Average Recall", href: "/mean_average_recall" },
          { title: "Precision", href: "/precision" },
          { title: "recall", href: "/recall" },
        ]
      },
      {
        title: "Utils",
        href: "/utils",
        noLink: true,
        items: [
          { title: "Draw", href: "/draw" },
          { title: "File", href: "/file" },
          { title: "Geometry", href: "/geometry" },
          { title: "Image", href: "/image" },
          { title: "Iterables", href: "/iterables" },
          { title: "Notebook", href: "/notebook" },
          { title: "Video", href: "/video" },
        ]
      },
    ],
  }
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
