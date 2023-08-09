import { create } from "zustand";
import { getPhotosAPI } from "../api/api";

export const useStore = create((set, get) => ({
  photosList: [
    {
      id: "g6Me5mUQQIQ",
      slug: "g6Me5mUQQIQ",
      created_at: "2023-05-02T06:42:00Z",
      updated_at: "2023-08-08T12:36:26Z",
      promoted_at: null,
      width: 8192,
      height: 5464,
      color: "#0c73d9",
      blur_hash: "LW8~]fR5DNxn?]R=DjxB#zb{Iqi{",
      description:
        "The vibrant waters of NEOM are home to some of the most picturesque and pristine islands in the Red Sea | Islands of NEOM – NEOM, Saudi Arabia.",
      alt_description: "a person swimming in the ocean near a cave",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1683009427666-340595e57e43?ixid=M3w0ODYxNjh8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1683009427666-340595e57e43?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1683009427666-340595e57e43?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1683009427666-340595e57e43?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1683009427666-340595e57e43?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1683009427666-340595e57e43",
      },
      links: {
        self: "https://api.unsplash.com/photos/g6Me5mUQQIQ",
        html: "https://unsplash.com/photos/g6Me5mUQQIQ",
        download:
          "https://unsplash.com/photos/g6Me5mUQQIQ/download?ixid=M3w0ODYxNjh8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MTU2NjY2OXw",
        download_location:
          "https://api.unsplash.com/photos/g6Me5mUQQIQ/download?ixid=M3w0ODYxNjh8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MTU2NjY2OXw",
      },
      likes: 160,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: {
        impression_urls: [
          "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false\u0026bannerID=11515523\u0026rnd=[timestamp]\u0026redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
          "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false\u0026bannerID=11515726\u0026rnd=[timestamp]\u0026redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
        ],
        tagline: "Made to Change",
        tagline_url:
          "https://www.neom.com/en-us?utm_source=unsplash\u0026utm_medium=referral",
        sponsor: {
          id: "mYizSrdJkkU",
          updated_at: "2023-08-09T04:52:02Z",
          username: "neom",
          name: "NEOM",
          first_name: "NEOM",
          last_name: null,
          twitter_username: "neom",
          portfolio_url: "http://www.neom.com",
          bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
          location: "NEOM, Saudi Arabia",
          links: {
            self: "https://api.unsplash.com/users/neom",
            html: "https://unsplash.com/@neom",
            photos: "https://api.unsplash.com/users/neom/photos",
            likes: "https://api.unsplash.com/users/neom/likes",
            portfolio: "https://api.unsplash.com/users/neom/portfolio",
            following: "https://api.unsplash.com/users/neom/following",
            followers: "https://api.unsplash.com/users/neom/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
            medium:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
            large:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
          },
          instagram_username: "discoverneom",
          total_collections: 7,
          total_likes: 0,
          total_photos: 202,
          accepted_tos: true,
          for_hire: false,
          social: {
            instagram_username: "discoverneom",
            portfolio_url: "http://www.neom.com",
            twitter_username: "neom",
            paypal_email: null,
          },
        },
      },
      topic_submissions: {
        blue: {
          status: "approved",
          approved_on: "2023-07-31T17:06:29Z",
        },
      },
      user: {
        id: "mYizSrdJkkU",
        updated_at: "2023-08-09T04:52:02Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
          medium:
            "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
          large:
            "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 0,
        total_photos: 202,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null,
        },
      },
    },
    {
      id: "G6oEzqw_z0I",
      slug: "a-blurry-photo-of-a-city-street-at-night-G6oEzqw_z0I",
      created_at: "2023-08-05T23:01:44Z",
      updated_at: "2023-08-08T15:16:01Z",
      promoted_at: "2023-08-08T15:16:01Z",
      width: 3238,
      height: 4533,
      color: "#260c0c",
      blur_hash: "LPCFx7EMs,aL.9jEWVWC14wdR+X7",
      description: "Intentional camera movement. Lady on the bridge.",
      alt_description: "a blurry photo of a city street at night",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1691276317069-84cdd25b3d1d?ixid=M3w0ODYxNjh8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1691276317069-84cdd25b3d1d?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1691276317069-84cdd25b3d1d?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1691276317069-84cdd25b3d1d?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1691276317069-84cdd25b3d1d?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1691276317069-84cdd25b3d1d",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-blurry-photo-of-a-city-street-at-night-G6oEzqw_z0I",
        html: "https://unsplash.com/photos/a-blurry-photo-of-a-city-street-at-night-G6oEzqw_z0I",
        download:
          "https://unsplash.com/photos/G6oEzqw_z0I/download?ixid=M3w0ODYxNjh8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MTU2NjY2OXw",
        download_location:
          "https://api.unsplash.com/photos/G6oEzqw_z0I/download?ixid=M3w0ODYxNjh8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MTU2NjY2OXw",
      },
      likes: 56,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "RgSB8Bj7eCo",
        updated_at: "2023-08-09T05:23:47Z",
        username: "stasostrikov",
        name: "Stas Ostrikov",
        first_name: "Stas",
        last_name: "Ostrikov",
        twitter_username: "stasostrikov",
        portfolio_url: "https://stasostrikov.com",
        bio: "Hi! I'm graphic designer \u0026 photographer with more than 15 years of experience in creative area. If you love the minimalist aesthetic, we're on our way.\r\nCheck out my new NFT collection on Sloika.xyz",
        location: "Helsinki",
        links: {
          self: "https://api.unsplash.com/users/stasostrikov",
          html: "https://unsplash.com/@stasostrikov",
          photos: "https://api.unsplash.com/users/stasostrikov/photos",
          likes: "https://api.unsplash.com/users/stasostrikov/likes",
          portfolio: "https://api.unsplash.com/users/stasostrikov/portfolio",
          following: "https://api.unsplash.com/users/stasostrikov/following",
          followers: "https://api.unsplash.com/users/stasostrikov/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-fb-1680875088-e602098ba139.jpg?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
          medium:
            "https://images.unsplash.com/profile-fb-1680875088-e602098ba139.jpg?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
          large:
            "https://images.unsplash.com/profile-fb-1680875088-e602098ba139.jpg?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
        },
        instagram_username: "stasostrikov",
        total_collections: 0,
        total_likes: 41,
        total_photos: 85,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "stasostrikov",
          portfolio_url: "https://stasostrikov.com",
          twitter_username: "stasostrikov",
          paypal_email: null,
        },
      },
    },
    {
      id: "Abfu_HHbM-Y",
      slug: "a-bird-flying-over-a-body-of-water-at-sunset-Abfu_HHbM-Y",
      created_at: "2023-08-03T14:09:24Z",
      updated_at: "2023-08-09T01:37:33Z",
      promoted_at: "2023-08-08T15:08:01Z",
      width: 6720,
      height: 4480,
      color: "#0c2640",
      blur_hash: "LMA+]V5RxDWC}rEhoKaz$fR,a}a}",
      description: null,
      alt_description: "a bird flying over a body of water at sunset",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixid=M3w0ODYxNjh8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1691071716244-db306a482fc0?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1691071716244-db306a482fc0?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1691071716244-db306a482fc0?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1691071716244-db306a482fc0?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1691071716244-db306a482fc0",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-bird-flying-over-a-body-of-water-at-sunset-Abfu_HHbM-Y",
        html: "https://unsplash.com/photos/a-bird-flying-over-a-body-of-water-at-sunset-Abfu_HHbM-Y",
        download:
          "https://unsplash.com/photos/Abfu_HHbM-Y/download?ixid=M3w0ODYxNjh8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MTU2NjY2OXw",
        download_location:
          "https://api.unsplash.com/photos/Abfu_HHbM-Y/download?ixid=M3w0ODYxNjh8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MTU2NjY2OXw",
      },
      likes: 51,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "Q2U5cKZEnU4",
        updated_at: "2023-08-08T18:51:40Z",
        username: "xcrap",
        name: "César Couto",
        first_name: "César",
        last_name: "Couto",
        twitter_username: "xcrap",
        portfolio_url: "https://www.cesarcouto.com",
        bio: "From the Azores islands. Passionate about visually beautiful things.  \r\nSunsets, Sunrises and Stars. Creator at Waka WebStudio.",
        location: "Azores, Portugal",
        links: {
          self: "https://api.unsplash.com/users/xcrap",
          html: "https://unsplash.com/@xcrap",
          photos: "https://api.unsplash.com/users/xcrap/photos",
          likes: "https://api.unsplash.com/users/xcrap/likes",
          portfolio: "https://api.unsplash.com/users/xcrap/portfolio",
          following: "https://api.unsplash.com/users/xcrap/following",
          followers: "https://api.unsplash.com/users/xcrap/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1652656566523-cb08ce516971image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
          medium:
            "https://images.unsplash.com/profile-1652656566523-cb08ce516971image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
          large:
            "https://images.unsplash.com/profile-1652656566523-cb08ce516971image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
        },
        instagram_username: "xcrap",
        total_collections: 3,
        total_likes: 6,
        total_photos: 114,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "xcrap",
          portfolio_url: "https://www.cesarcouto.com",
          twitter_username: "xcrap",
          paypal_email: null,
        },
      },
    },
    {
      id: "GnZEsIDK2eY",
      slug: "a-couple-of-glasses-filled-with-drinks-on-top-of-a-table-GnZEsIDK2eY",
      created_at: "2023-08-02T13:57:08Z",
      updated_at: "2023-08-08T15:00:01Z",
      promoted_at: "2023-08-08T15:00:01Z",
      width: 4480,
      height: 6479,
      color: "#f3f3f3",
      blur_hash: "LIQcI|pKtStR^jR-Z~%$*0WYMcXS",
      description: "Summer refreshment. Crystal glasses with cocktail",
      alt_description:
        "a couple of glasses filled with drinks on top of a table",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1690983316606-87b1d720f1cf?ixid=M3w0ODYxNjh8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1690983316606-87b1d720f1cf?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1690983316606-87b1d720f1cf?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1690983316606-87b1d720f1cf?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1690983316606-87b1d720f1cf?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1690983316606-87b1d720f1cf",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-couple-of-glasses-filled-with-drinks-on-top-of-a-table-GnZEsIDK2eY",
        html: "https://unsplash.com/photos/a-couple-of-glasses-filled-with-drinks-on-top-of-a-table-GnZEsIDK2eY",
        download:
          "https://unsplash.com/photos/GnZEsIDK2eY/download?ixid=M3w0ODYxNjh8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MTU2NjY2OXw",
        download_location:
          "https://api.unsplash.com/photos/GnZEsIDK2eY/download?ixid=M3w0ODYxNjh8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MTU2NjY2OXw",
      },
      likes: 40,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "3Cs3CS4iFRM",
        updated_at: "2023-08-08T19:43:15Z",
        username: "sergeykotenev",
        name: "Sergey Kotenev",
        first_name: "Sergey",
        last_name: "Kotenev",
        twitter_username: null,
        portfolio_url: "http://www.behance.net/sergeykotenev",
        bio: null,
        location: null,
        links: {
          self: "https://api.unsplash.com/users/sergeykotenev",
          html: "https://unsplash.com/@sergeykotenev",
          photos: "https://api.unsplash.com/users/sergeykotenev/photos",
          likes: "https://api.unsplash.com/users/sergeykotenev/likes",
          portfolio: "https://api.unsplash.com/users/sergeykotenev/portfolio",
          following: "https://api.unsplash.com/users/sergeykotenev/following",
          followers: "https://api.unsplash.com/users/sergeykotenev/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1682416417541-cd9e64c03187image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
          medium:
            "https://images.unsplash.com/profile-1682416417541-cd9e64c03187image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
          large:
            "https://images.unsplash.com/profile-1682416417541-cd9e64c03187image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
        },
        instagram_username: "sergeykotenev.ru",
        total_collections: 0,
        total_likes: 11,
        total_photos: 110,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "sergeykotenev.ru",
          portfolio_url: "http://www.behance.net/sergeykotenev",
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "-F-DgTbIT3U",
      slug: "a-man-riding-a-snowboard-down-a-snow-covered-slope--F-DgTbIT3U",
      created_at: "2023-08-02T14:05:23Z",
      updated_at: "2023-08-08T14:48:01Z",
      promoted_at: "2023-08-08T14:48:01Z",
      width: 4160,
      height: 6240,
      color: "#f3f3f3",
      blur_hash: "L4Rfg}$+-;e=X.RP01WDH?oLWBWD",
      description: null,
      alt_description: "a man riding a snowboard down a snow covered slope",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1690984806714-f1899508d7ec?ixid=M3w0ODYxNjh8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1690984806714-f1899508d7ec?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1690984806714-f1899508d7ec?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1690984806714-f1899508d7ec?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1690984806714-f1899508d7ec?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1690984806714-f1899508d7ec",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-man-riding-a-snowboard-down-a-snow-covered-slope--F-DgTbIT3U",
        html: "https://unsplash.com/photos/a-man-riding-a-snowboard-down-a-snow-covered-slope--F-DgTbIT3U",
        download:
          "https://unsplash.com/photos/-F-DgTbIT3U/download?ixid=M3w0ODYxNjh8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MTU2NjY2OXw",
        download_location:
          "https://api.unsplash.com/photos/-F-DgTbIT3U/download?ixid=M3w0ODYxNjh8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MTU2NjY2OXw",
      },
      likes: 23,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "HBKtNiATif8",
        updated_at: "2023-08-08T14:51:14Z",
        username: "ling_gigi",
        name: "Gigi",
        first_name: "Gigi",
        last_name: null,
        twitter_username: null,
        portfolio_url: "https://linggigi.wixsite.com/photography",
        bio: "Sharing bits of the world ",
        location: "Singapore",
        links: {
          self: "https://api.unsplash.com/users/ling_gigi",
          html: "https://unsplash.com/@ling_gigi",
          photos: "https://api.unsplash.com/users/ling_gigi/photos",
          likes: "https://api.unsplash.com/users/ling_gigi/likes",
          portfolio: "https://api.unsplash.com/users/ling_gigi/portfolio",
          following: "https://api.unsplash.com/users/ling_gigi/following",
          followers: "https://api.unsplash.com/users/ling_gigi/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1554289545797-5ae17e0f3109?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
          medium:
            "https://images.unsplash.com/profile-1554289545797-5ae17e0f3109?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
          large:
            "https://images.unsplash.com/profile-1554289545797-5ae17e0f3109?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
        },
        instagram_username: "ling_gigi",
        total_collections: 11,
        total_likes: 109,
        total_photos: 171,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "ling_gigi",
          portfolio_url: "https://linggigi.wixsite.com/photography",
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "kzEFwhXPXwo",
      slug: "kzEFwhXPXwo",
      created_at: "2023-04-28T12:46:16Z",
      updated_at: "2023-08-08T10:37:55Z",
      promoted_at: null,
      width: 8013,
      height: 5342,
      color: "#260c0c",
      blur_hash: "L65}24^iEM0zIpNGWVof%2t6R*Rj",
      description:
        "A beautiful and ancient spring fed canyon which weaves its way through 400-meter-tall towers of granite, sandstone and basalt, before plunging into the Gulf of Aqaba | Shiʻb Mūsá – NEOM, Saudi Arabia.",
      alt_description:
        "a man standing in a narrow canyon between two mountains",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1682685796965-9814afcbff55?ixid=M3w0ODYxNjh8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1682685796965-9814afcbff55?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1682685796965-9814afcbff55?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1682685796965-9814afcbff55?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1682685796965-9814afcbff55?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682685796965-9814afcbff55",
      },
      links: {
        self: "https://api.unsplash.com/photos/kzEFwhXPXwo",
        html: "https://unsplash.com/photos/kzEFwhXPXwo",
        download:
          "https://unsplash.com/photos/kzEFwhXPXwo/download?ixid=M3w0ODYxNjh8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MTU2NjY2OXw",
        download_location:
          "https://api.unsplash.com/photos/kzEFwhXPXwo/download?ixid=M3w0ODYxNjh8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MTU2NjY2OXw",
      },
      likes: 148,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: {
        impression_urls: [
          "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false\u0026bannerID=11515709\u0026rnd=[timestamp]\u0026redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
          "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false\u0026bannerID=11515912\u0026rnd=[timestamp]\u0026redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
        ],
        tagline: "Made to Change",
        tagline_url:
          "https://www.neom.com/en-us?utm_source=unsplash\u0026utm_medium=referral",
        sponsor: {
          id: "mYizSrdJkkU",
          updated_at: "2023-08-09T04:52:02Z",
          username: "neom",
          name: "NEOM",
          first_name: "NEOM",
          last_name: null,
          twitter_username: "neom",
          portfolio_url: "http://www.neom.com",
          bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
          location: "NEOM, Saudi Arabia",
          links: {
            self: "https://api.unsplash.com/users/neom",
            html: "https://unsplash.com/@neom",
            photos: "https://api.unsplash.com/users/neom/photos",
            likes: "https://api.unsplash.com/users/neom/likes",
            portfolio: "https://api.unsplash.com/users/neom/portfolio",
            following: "https://api.unsplash.com/users/neom/following",
            followers: "https://api.unsplash.com/users/neom/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
            medium:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
            large:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
          },
          instagram_username: "discoverneom",
          total_collections: 7,
          total_likes: 0,
          total_photos: 202,
          accepted_tos: true,
          for_hire: false,
          social: {
            instagram_username: "discoverneom",
            portfolio_url: "http://www.neom.com",
            twitter_username: "neom",
            paypal_email: null,
          },
        },
      },
      topic_submissions: {},
      user: {
        id: "mYizSrdJkkU",
        updated_at: "2023-08-09T04:52:02Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
          medium:
            "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
          large:
            "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 0,
        total_photos: 202,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null,
        },
      },
    },
    {
      id: "cYMENaBlv0w",
      slug: "a-person-holding-a-sunflower-in-a-field-of-sunflowers-cYMENaBlv0w",
      created_at: "2023-08-04T18:59:56Z",
      updated_at: "2023-08-08T21:38:03Z",
      promoted_at: "2023-08-08T14:16:01Z",
      width: 2648,
      height: 3972,
      color: "#d9d9c0",
      blur_hash: "LqLWRwR+tRaJ~pWVs:V@9wn~M|Wq",
      description: null,
      alt_description: "a person holding a sunflower in a field of sunflowers",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1691175085195-a743156f9b2c?ixid=M3w0ODYxNjh8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1691175085195-a743156f9b2c?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1691175085195-a743156f9b2c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1691175085195-a743156f9b2c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1691175085195-a743156f9b2c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1691175085195-a743156f9b2c",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-person-holding-a-sunflower-in-a-field-of-sunflowers-cYMENaBlv0w",
        html: "https://unsplash.com/photos/a-person-holding-a-sunflower-in-a-field-of-sunflowers-cYMENaBlv0w",
        download:
          "https://unsplash.com/photos/cYMENaBlv0w/download?ixid=M3w0ODYxNjh8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MTU2NjY2OXw",
        download_location:
          "https://api.unsplash.com/photos/cYMENaBlv0w/download?ixid=M3w0ODYxNjh8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MTU2NjY2OXw",
      },
      likes: 54,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "mpyuYFiAqDc",
        updated_at: "2023-08-08T18:57:00Z",
        username: "ollyhoo",
        name: "Olly Hoodyakova",
        first_name: "Olly",
        last_name: "Hoodyakova",
        twitter_username: null,
        portfolio_url: "https://ollyhoo.com/",
        bio: null,
        location: "Saint-Petersburg",
        links: {
          self: "https://api.unsplash.com/users/ollyhoo",
          html: "https://unsplash.com/@ollyhoo",
          photos: "https://api.unsplash.com/users/ollyhoo/photos",
          likes: "https://api.unsplash.com/users/ollyhoo/likes",
          portfolio: "https://api.unsplash.com/users/ollyhoo/portfolio",
          following: "https://api.unsplash.com/users/ollyhoo/following",
          followers: "https://api.unsplash.com/users/ollyhoo/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1690574150618-161829b2f66fimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
          medium:
            "https://images.unsplash.com/profile-1690574150618-161829b2f66fimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
          large:
            "https://images.unsplash.com/profile-1690574150618-161829b2f66fimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
        },
        instagram_username: "ollyhoo",
        total_collections: 0,
        total_likes: 0,
        total_photos: 14,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "ollyhoo",
          portfolio_url: "https://ollyhoo.com/",
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "m3wpot6fsw0",
      slug: "a-plane-flying-in-the-sky-at-sunset-m3wpot6fsw0",
      created_at: "2023-08-04T13:47:27Z",
      updated_at: "2023-08-08T18:39:15Z",
      promoted_at: "2023-08-08T14:08:01Z",
      width: 9504,
      height: 6336,
      color: "#40260c",
      blur_hash: "LmH,CJNcE3oe}qbHNHoKIqxYxZaf",
      description: null,
      alt_description: "a plane flying in the sky at sunset",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixid=M3w0ODYxNjh8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1691156568477-7188f31e6f4e",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-plane-flying-in-the-sky-at-sunset-m3wpot6fsw0",
        html: "https://unsplash.com/photos/a-plane-flying-in-the-sky-at-sunset-m3wpot6fsw0",
        download:
          "https://unsplash.com/photos/m3wpot6fsw0/download?ixid=M3w0ODYxNjh8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MTU2NjY2OXw",
        download_location:
          "https://api.unsplash.com/photos/m3wpot6fsw0/download?ixid=M3w0ODYxNjh8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MTU2NjY2OXw",
      },
      likes: 55,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        wallpapers: {
          status: "approved",
          approved_on: "2023-08-07T11:41:00Z",
        },
      },
      user: {
        id: "v2RF4SeIUts",
        updated_at: "2023-08-09T06:51:49Z",
        username: "limamauro23",
        name: "Mauro Lima",
        first_name: "Mauro",
        last_name: "Lima",
        twitter_username: null,
        portfolio_url: "https://www.instagram.com/limamauro23/",
        bio: null,
        location: "Rio de Janeiro, Brazil",
        links: {
          self: "https://api.unsplash.com/users/limamauro23",
          html: "https://unsplash.com/@limamauro23",
          photos: "https://api.unsplash.com/users/limamauro23/photos",
          likes: "https://api.unsplash.com/users/limamauro23/likes",
          portfolio: "https://api.unsplash.com/users/limamauro23/portfolio",
          following: "https://api.unsplash.com/users/limamauro23/following",
          followers: "https://api.unsplash.com/users/limamauro23/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1581387326424-d34750b1c8fbimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
          medium:
            "https://images.unsplash.com/profile-1581387326424-d34750b1c8fbimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
          large:
            "https://images.unsplash.com/profile-1581387326424-d34750b1c8fbimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
        },
        instagram_username: "limamauro23",
        total_collections: 2,
        total_likes: 265,
        total_photos: 663,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "limamauro23",
          portfolio_url: "https://www.instagram.com/limamauro23/",
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "dklx0BQlLzQ",
      slug: "a-woman-standing-in-front-of-a-window-at-night-dklx0BQlLzQ",
      created_at: "2023-08-04T04:11:37Z",
      updated_at: "2023-08-09T06:37:17Z",
      promoted_at: "2023-08-08T12:08:01Z",
      width: 6000,
      height: 4000,
      color: "#0c2626",
      blur_hash: "LdE-Q~=x9vEg}?$%EMNHX8WWafoK",
      description: null,
      alt_description: "a woman standing in front of a window at night",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1691120040190-b763dfee386c?ixid=M3w0ODYxNjh8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1691120040190-b763dfee386c?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1691120040190-b763dfee386c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1691120040190-b763dfee386c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1691120040190-b763dfee386c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MTU2NjY2OXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1691120040190-b763dfee386c",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-woman-standing-in-front-of-a-window-at-night-dklx0BQlLzQ",
        html: "https://unsplash.com/photos/a-woman-standing-in-front-of-a-window-at-night-dklx0BQlLzQ",
        download:
          "https://unsplash.com/photos/dklx0BQlLzQ/download?ixid=M3w0ODYxNjh8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MTU2NjY2OXw",
        download_location:
          "https://api.unsplash.com/photos/dklx0BQlLzQ/download?ixid=M3w0ODYxNjh8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MTU2NjY2OXw",
      },
      likes: 26,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "D_ZoGXbWrXc",
        updated_at: "2023-08-08T18:57:55Z",
        username: "patrick_hawlik",
        name: "Patrick Hawlik",
        first_name: "Patrick",
        last_name: "Hawlik",
        twitter_username: null,
        portfolio_url: null,
        bio: "Hi i'm Patrick, a photographer based in Vienna. Blending cinematic and cyberpunk styles for moody portraits.",
        location: "Vienna, Austria",
        links: {
          self: "https://api.unsplash.com/users/patrick_hawlik",
          html: "https://unsplash.com/@patrick_hawlik",
          photos: "https://api.unsplash.com/users/patrick_hawlik/photos",
          likes: "https://api.unsplash.com/users/patrick_hawlik/likes",
          portfolio: "https://api.unsplash.com/users/patrick_hawlik/portfolio",
          following: "https://api.unsplash.com/users/patrick_hawlik/following",
          followers: "https://api.unsplash.com/users/patrick_hawlik/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1690160278285-55b9e22313feimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
          medium:
            "https://images.unsplash.com/profile-1690160278285-55b9e22313feimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
          large:
            "https://images.unsplash.com/profile-1690160278285-55b9e22313feimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
        },
        instagram_username: "patrick.hawlik",
        total_collections: 3,
        total_likes: 23,
        total_photos: 33,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "patrick.hawlik",
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "CFnH3l1-IUU",
      slug: "a-close-up-of-an-orange-and-white-birds-feathers-CFnH3l1-IUU",
      created_at: "2023-08-01T21:54:36Z",
      updated_at: "2023-08-08T20:39:35Z",
      promoted_at: "2023-08-08T12:00:02Z",
      width: 3456,
      height: 4608,
      color: "#a6400c",
      blur_hash: "LHJhv$}rI;$hTc-TjFayD+RQfkj[",
      description: null,
      alt_description: "a close up of an orange and white bird's feathers",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1690923888922-f775da8f2346?ixid=M3w0ODYxNjh8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTE1NjY2Njl8\u0026ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1690923888922-f775da8f2346?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTE1NjY2Njl8\u0026ixlib=rb-4.0.3\u0026q=85",
        regular:
          "https://images.unsplash.com/photo-1690923888922-f775da8f2346?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTE1NjY2Njl8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
        small:
          "https://images.unsplash.com/photo-1690923888922-f775da8f2346?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTE1NjY2Njl8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
        thumb:
          "https://images.unsplash.com/photo-1690923888922-f775da8f2346?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0ODYxNjh8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTE1NjY2Njl8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1690923888922-f775da8f2346",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-close-up-of-an-orange-and-white-birds-feathers-CFnH3l1-IUU",
        html: "https://unsplash.com/photos/a-close-up-of-an-orange-and-white-birds-feathers-CFnH3l1-IUU",
        download:
          "https://unsplash.com/photos/CFnH3l1-IUU/download?ixid=M3w0ODYxNjh8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTE1NjY2Njl8",
        download_location:
          "https://api.unsplash.com/photos/CFnH3l1-IUU/download?ixid=M3w0ODYxNjh8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTE1NjY2Njl8",
      },
      likes: 61,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        animals: {
          status: "rejected",
        },
        nature: {
          status: "rejected",
        },
        "textures-patterns": {
          status: "approved",
          approved_on: "2023-08-07T11:54:40Z",
        },
        experimental: {
          status: "rejected",
        },
        wallpapers: {
          status: "rejected",
        },
      },
      user: {
        id: "DKSePVWT71I",
        updated_at: "2023-08-09T05:23:48Z",
        username: "maddy_moon",
        name: "Maddy Weiss",
        first_name: "Maddy",
        last_name: "Weiss",
        twitter_username: null,
        portfolio_url: null,
        bio: "I do photography as a hobby. I love taking photos of nature in particular. Feel free to message me telling me if you enjoyed a specific photo, or what you used my photos for.",
        location: "Wisconsin",
        links: {
          self: "https://api.unsplash.com/users/maddy_moon",
          html: "https://unsplash.com/@maddy_moon",
          photos: "https://api.unsplash.com/users/maddy_moon/photos",
          likes: "https://api.unsplash.com/users/maddy_moon/likes",
          portfolio: "https://api.unsplash.com/users/maddy_moon/portfolio",
          following: "https://api.unsplash.com/users/maddy_moon/following",
          followers: "https://api.unsplash.com/users/maddy_moon/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1661214551343-e2b640a650f5image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
          medium:
            "https://images.unsplash.com/profile-1661214551343-e2b640a650f5image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
          large:
            "https://images.unsplash.com/profile-1661214551343-e2b640a650f5image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
        },
        instagram_username: null,
        total_collections: 10,
        total_likes: 2,
        total_photos: 859,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: null,
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
  ],
  currentPhoto: {},
  currentPhotoId: null,
  setCurrentPhoto: (item, index) => {
    if (get().currentPhotoId) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }

    set({ currentPhotoId: index, currentPhoto: item });
  },
  getPhotosList: async (page) => {
    let res = await getPhotosAPI(page);
    set({
      photosList: res,
    });
  },
}));
