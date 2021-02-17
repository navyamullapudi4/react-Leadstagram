const SocialIcons = {
  Facebook: {
    IconClass: "social-facebook",
    UrlPrepend: "https://www.facebook.com/"
  },
  Twitter: {
    IconClass: "social-twitter",
    UrlPrepend: "https://www.twitter.com/"
  },
  LinkedIn: {
    IconClass: "social-linkedin",
    UrlPrepend: "https://www.linkedin.com/"
  },
  Instagra: {
    IconClass: "social-instagram",
    UrlPrepend: "https://www.instagram.com/"
  },
  Quora: {
    IconClass: "social-question",
    UrlPrepend: "https://www.quora.com/"
  },
  Youtube: {
    IconClass: "social-youtube",
    UrlPrepend: "https://youtube.com/"
  },
  Reddit: {
    IconClass: "social-reddit",
    UrlPrepend: "https://reddit.com/"
  },
  Website: {
    IconClass: "globe",
    UrlPrepend: ""
  },
  Phone: {
    IconClass: "screen-smartphone",
    UrlPrepend: "tel:"
  }
};
const Icon = ({ Network, Profile }) => (
  <a
    href={SocialIcons[Network].UrlPrepend + Profile}
    className="btn btn-outline-success mr-2 btn-sm"
  >
    <i className={"icon-" + SocialIcons[Network].IconClass}></i>
    {Network === "Phone" ? " " + Profile : null}
  </a>
);
export default Icon;
