import Link from "./Link";
import { Link as LinkType } from "../types";

import { useQuery, gql } from "@apollo/client";

export const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
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
          {data.feed.links.map((link: LinkType, index: number) => (
            <Link key={link.id} link={link} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LinkList;
