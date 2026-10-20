/* ------------------------------------------------------------------
   EDIT THIS FILE ONLY.
   Everything on the invitation is driven from the values below.
   Leave an image path as "" to keep the dashed placeholder box.
   Put your own photos in an /images folder and point to them,
   e.g. hero: "images/hero.png"
------------------------------------------------------------------- */
window.INVITE = {
  siteTitle: "[Groom Name] Weds [Bride Name]",

  groom: {
    first: "[Groom]",
    full: "[Groom Full Name]",
    parents: ["S/o Mrs [Mother Name]", "and Mr [Father Name]"]
  },
  bride: {
    first: "[Bride]",
    full: "[Bride Full Name]",
    parents: ["D/o Mrs [Mother Name]", "and Mr [Father Name]"]
  },

  monogram: ["G", "B"],          // letters shown in the top nav
  country: "[COUNTRY]",
  city: "[CITY]",
  date: { month: "MON", day: "DD", year: "YYYY", long: "DD MONTH, YYYY" },

  envelope: {
    eyebrow: "WITH THE BLESSINGS OF OUR FAMILIES",
    teaser: "We have some news...",
    hint: "TAP HERE TO OPEN",
    sealSymbol: "ॐ"               // change to anything, or "" for blank
  },

  hero: { eyebrow: "THE WEDDING CEREMONY OF" },

  invite: {
    eyebrow: "YOU'RE INVITED",
    heading: "Together with our families we invite you to celebrate our wedding day",
    body: "[Write a warm paragraph here about the celebration, the place, and why you'd love your guests to be there.]"
  },

  story: {
    eyebrow: "OUR STORY",
    heading: "A beautiful beginning to our forever",
    text: "[One or two lines about how your story began.]"
  },

  venue: {
    eyebrow: "THE WEDDING VENUE",
    heading: "A celebration in the heart of [Region]",
    label: "CEREMONY",
    name: "[Venue Name]",
    blurb: "[A short line about the venue and the celebration.]",
    address: "[Venue address line 1, line 2, City, PIN]",
    directionsUrl: "",             // paste a Google Maps link
    directionsText: "Click Here for Directions"
  },

  schedule: {
    eyebrow: "THE SCHEDULE",
    heading: "Our Wedding Day",
    days: [
      {
        date: "[DD MONTH]",
        events: [
          { time: "00:00 AM", title: "[Event One]",   desc: "[Short description of this event.]" },
          { time: "00:00 PM", title: "[Event Two]",   desc: "[Short description of this event.]" },
          { time: "00:00 PM", title: "[Event Three]", desc: "[Short description of this event.]" }
        ]
      },
      {
        date: "[DD MONTH]",
        events: [
          { time: "00:00 AM", title: "[Event Four]",  desc: "[Short description of this event.]" },
          { time: "00:00 AM", title: "[Event Five]",  desc: "[Short description of this event.]" },
          { time: "00:00 PM", title: "[Event Six]",   desc: "[Short description of this event.]" }
        ]
      }
    ]
  },

  secondVenue: {
    enabled: true,                 // set false to hide this block
    name: "[Second Venue Name]",
    address: "[Second venue address, City, PIN]",
    mapsUrl: "",
    mapsText: "View on Google Maps",
    directionsUrl: "",
    directionsText: "Click Here for Directions"
  },

  footer: {
    venueName: "[VENUE NAME]",
    venueLine: "[AREA / LANDMARK]",
    dateLine: "DD MONTH, YYYY"
  },

  // Leave "" to show a placeholder box.
  images: {
    hero: "",
    story: ["", "", "", ""],
    venue: ""
  },

  // Optional background music file, e.g. "audio/song.mp3". "" hides the button.
  music: { src: "" }
};
