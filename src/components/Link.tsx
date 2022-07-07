import { Link as LinkType } from "../types";

type Props = {
  link: LinkType;
};

const Link = (props: Props) => {
  const { link } = props;

  return (
    <div>
      {link.description} ({link.url})
    </div>
  );
};

export default Link;
