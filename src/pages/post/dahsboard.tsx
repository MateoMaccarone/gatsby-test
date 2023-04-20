import * as React from 'react';
import { graphql } from "gatsby";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const MarkdownToHtml = ({body}:{body:string}) => <ReactMarkdown remarkPlugins={[gfm]}>{body}</ReactMarkdown>

// @ts-ignore
const Dashboard = ({ data }) => {
    return (
        <article>
            <p>Posts :D</p>
            {
                data.allDatoCmsPost.edges.map((post:any) => {
                    return (
                        <div key={post.node.id}>
                            <h1>{post.node.postTitle}</h1>
                            <MarkdownToHtml body={post.node.postBody} />
                            <p>Author: {post.node.postAuthor.name}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </article>
    )
};

export default Dashboard
export const query = graphql`
    query MyQuery {
      allDatoCmsPost {
        edges {
          node {
            id
            postBody
            postTitle
            postAuthor {
              id
              name
            }
          }
        }
      }
    }
`;
