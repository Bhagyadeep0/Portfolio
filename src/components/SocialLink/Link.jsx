import "./link.scss";

const Link = () => {
  const urls = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bhagyadeep-ghosh-03705924b/",
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://twitter.com/bhagyadeepghosh",
    },
    {
      id: 3,
      name: "Github",
      url: "https://github.com/Bhagyadeep0",
    },
    {
      id: 4,
      name: "Behance",
      url: "https://www.behance.net/bhagyadeep_ghosh",
    },
  ];

  return (
    <ul>
      {urls.map((url) => (
        <a href={`${url.url}`} key={url.id} target="_blank">
          {url.name}
        </a>
      ))}
    </ul>
  );
};

export default Link;
