import { WidgetOption } from "@/components/widgetEditor/WidgetCreator";


export const widgetOptions: WidgetOption[] = [
  {
    id: "pixelfed",
    name: "Pixelfed",
    imageLink: "/widgeteditor/pixelfed.webp",
    imageLinkDarkTheme: "/widgeteditor/pixelfed.webp",
    fields: [
      { key: "instance", label: "Instance", type: "text" },
      { key: "username", label: "Username", type: "text" },
    ],
    variants: [{ index: 1 }],
    sizes: [
      { cols: 1, rows: 1 },
      { cols: 1, rows: 2 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 2 },
    ],
  },
  {
    id: "github",
    name: "GitHub",
    imageLink: "/widgeteditor/github.webp",
    imageLinkDarkTheme: "/widgeteditor/github_white.webp",
    fields: [{ key: "username", label: "Username", type: "text" }],
    variants: [{ index: 1 }, { index: 2 }, { index: 3 }],
    sizes: [
      { cols: 1, rows: 1 },
      { cols: 1, rows: 2 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 2 },
    ],
  },
  {
    id: "mastodon",
    name: "Mastodon",
    imageLink: "/widgeteditor/mastodon.svg",
    imageLinkDarkTheme: "/widgeteditor/mastodon.svg",
    fields: [
      { key: "instance", label: "Instance", type: "text" },
      { key: "username", label: "Username", type: "text" },
    ],
    variants: [{ index: 1 }, { index: 2 }, { index: 3 }],
    sizes: [
      { cols: 1, rows: 1 },
      { cols: 1, rows: 2 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 2 },
    ],
  },
  {
    id: "lemmy",
    name: "Lemmy",
    imageLink: "/widgeteditor/lemmy.svg",
    imageLinkDarkTheme: "/widgeteditor/lemmy.svg",
    fields: [
      { key: "instance", label: "Instance", type: "text" },
      { key: "username", label: "Username", type: "text" },
    ],
    variants: [{ index: 1 }],
    sizes: [
      { cols: 1, rows: 1 },
      { cols: 1, rows: 2 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 2 },
    ],
  },
  {
    id: "liberapay",
    name: "Liberapay",
    imageLink: "/widgeteditor/liberapay.png",
    imageLinkDarkTheme: "/widgeteditor/liberapay.png",
    fields: [{ key: "username", label: "Username", type: "text" }],
    variants: [{ index: 1 }],
    sizes: [
      { cols: 1, rows: 1 },
      { cols: 1, rows: 2 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 2 },
    ],
  },
  {
    id: "note",
    name: "Note",
    imageLink: "/widgeteditor/note.svg",
    imageLinkDarkTheme: "/widgeteditor/note_white.svg",
    fields: [{ key: "note", label: "Note", type: "text" }],
    variants: [{ index: 1 }],
    sizes: [
      { cols: 1, rows: 1 },
      { cols: 1, rows: 2 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 2 },
    ],
  },
  {
    id: "localTime",
    name: "Local Time",
    imageLink: "/widgeteditor/timezone.svg",
    imageLinkDarkTheme: "/widgeteditor/timezone_white.svg",
    fields: [
      {
        key: "timezone",
        label: "Timezone",
        type: "select",
        options: Intl.supportedValuesOf("timeZone"),
        defaultOption: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    ],
    variants: [{ index: 1 }, { index: 2 }],
    sizes: [
      { cols: 1, rows: 1 },
      { cols: 1, rows: 2 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 2 },
    ],
  },
];