import { WidgetOption } from "@/components/widgetEditor/WidgetCreator";
import { countryOptions } from "@/lib/country";
import { getCountryDataList, ICountryData } from 'countries-list'


export const widgetOptions: WidgetOption[] = [
  {
    id: "fediverse",
    name: "Fediverse",
    imageLink: "/widgeteditor/fediverse.svg",
    imageLinkDarkTheme: "/widgeteditor/fediverse.svg",
    fields: [
      { key: "link", label: "Link", type: "url", placeholder: "https://pixelfed.social/@username" },
      { key: "fediverseHandle", label: "Fediverse Handle", type: "string", placeholder: "@username@mastodon.social" },
    ],
    variants: [{ index: 1 }, { index: 2 }],
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
      { key: "instance", label: "Instance", type: "text", placeholder: "mastodon.social" },
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
    id: "pixelfed",
    name: "Pixelfed",
    imageLink: "/widgeteditor/pixelfed.webp",
    imageLinkDarkTheme: "/widgeteditor/pixelfed.webp",
    fields: [
      { key: "instance", label: "Instance", type: "text", placeholder: "pixelfed.social" },
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
    id: "lemmy",
    name: "Lemmy",
    imageLink: "/widgeteditor/lemmy.svg",
    imageLinkDarkTheme: "/widgeteditor/lemmy.svg",
    fields: [
      { key: "instance", label: "Instance", type: "text", placeholder: "lemmy.ml" },
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
    id: "peertube",
    name: "Peertube",
    imageLink: "/widgeteditor/peertube.svg",
    imageLinkDarkTheme: "/widgeteditor/peertube.svg",
    fields: [
      { key: "instance", label: "Instance", type: "text", placeholder: "clip.place" },
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
    id: "vernissage",
    name: "Vernissage",
    imageLink: "/widgeteditor/vernissage.png",
    imageLinkDarkTheme: "/widgeteditor/vernissage.png",
    fields: [
      { key: "username", label: "Username", type: "text" },
    ],
    variants: [{ index: 1 }, { index: 2 }],
    sizes: [
      { cols: 1, rows: 1 },
      { cols: 1, rows: 2 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 2 },
    ],
  },
  {
    id: "bookwyrm",
    name: "BookWyrm",
    imageLink: "/widgeteditor/bookwyrm.png",
    imageLinkDarkTheme: "/widgeteditor/bookwyrm.png",
    fields: [
      { key: "instance", label: "Instance", type: "text", placeholder: "bookwyrm.social" },
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
    id: "matrix",
    name: "Matrix",
    imageLink: "/widgeteditor/matrix-black.svg",
    imageLinkDarkTheme: "/widgeteditor/matrix-white.svg",
    fields: [
      { key: "instance", label: "Instance", type: "text", placeholder: "matrix.org" },
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
    id: "bluesky",
    name: "Bluesky",
    imageLink: "/widgeteditor/bluesky.svg",
    imageLinkDarkTheme: "/widgeteditor/bluesky.svg",
    fields: [
      { key: "handle", label: "Handle", type: "text", placeholder: "username.bsky.social" },
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
    id: "neodb",
    name: "NeoDB",
    imageLink: "/widgeteditor/neodb.svg",
    imageLinkDarkTheme: "/widgeteditor/neodb.svg",
    fields: [
      { key: "instance", label: "Instance", type: "text", placeholder: "neodb.social" },
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
    id: "listenbrainz",
    name: "ListenBrainz",
    imageLink: "/widgeteditor/listenbrainz.svg",
    imageLinkDarkTheme: "/widgeteditor/listenbrainz.svg",
    fields: [
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
    id: "recordclub",
    name: "Record Club",
    imageLink: "/widgeteditor/recordClub.png",
    imageLinkDarkTheme: "/widgeteditor/recordClub.png",
    fields: [
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
    id: "codeberg",
    name: "Codeberg",
    imageLink: "/widgeteditor/codeberg.svg",
    imageLinkDarkTheme: "/widgeteditor/codeberg.svg",
    fields: [{ key: "username", label: "Username", type: "text" }],
    variants: [{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }, { index: 5 }, { index: 6 }],
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
    id: "buymeacoffee",
    name: "Buy me a Coffee",
    imageLink: "/widgeteditor/buymeacoffee.png",
    imageLinkDarkTheme: "/widgeteditor/buymeacoffee.png",
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
    id: "kofi",
    name: "Ko-fi",
    imageLink: "/widgeteditor/kofi.svg",
    imageLinkDarkTheme: "/widgeteditor/kofi.svg",
    fields: [{ key: "username", label: "Username", type: "text" }],
    variants: [{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }, { index: 5 }],
    sizes: [
      { cols: 1, rows: 1 },
      { cols: 1, rows: 2 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 2 },
    ],
  },
  {
    id: "image",
    name: "Image",
    imageLink: "/widgeteditor/image_black.svg",
    imageLinkDarkTheme: "/widgeteditor/image_white.svg",
    fields: [
      { key: "image", label: "Image", type: "image"},
      { key: "link", label: "Link", type: "text"},
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
    id: "country",
    name: "Country",
    imageLink: "/widgeteditor/country_black.svg",
    imageLinkDarkTheme: "/widgeteditor/country_white.svg",
    fields: [
      {
        key: "countryName",
        label: "Country",
        type: "select",
        options: countryOptions
      },
    ],
    variants: [{ index: 1 }],
    sizes: [
      { cols: 1, rows: 1 },
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
  {
    id: "email",
    name: "Email",
    imageLink: "/widgeteditor/mail.svg",
    imageLinkDarkTheme: "/widgeteditor/mail_white.svg",
    fields: [{ key: "email", label: "E-Mail", type: "email", placeholder: "someone@example.com" }],
    variants: [{ index: 1 }, { index: 2 }],
    sizes: [
      { cols: 1, rows: 1 },
      { cols: 1, rows: 2 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 2 },
    ],
  },

  {
    id: "link",
    name: "Link",
    imageLink: "/widgeteditor/link.svg",
    imageLinkDarkTheme: "/widgeteditor/link_white.svg",
    fields: [
      { key: "label", label: "Label", type: "text"},
      { key: "link", label: "Link", type: "url", placeholder: "https://somewebsite.com" }
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

];