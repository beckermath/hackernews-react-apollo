import Link from "./Link";
import { Link as LinkType } from "../types";

import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <div>
          {data.feed.links.map((link: LinkType) => (
            <Link link={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LinkList;
