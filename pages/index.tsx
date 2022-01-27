import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Bio from '../components/Bio';
import Teaching from '../components/Teaching';
import Newsletter from '../components/Newsletter';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import RichTextComponent from '../components/RichTextComponent';

export const getStaticProps: GetStaticProps<any> = async ({
  params,
  preview,
}) => {
  const { KONTENT_GQL_ENDPOINT, KONTENT_PROJECT_ID } = process.env;

  const client = new ApolloClient({
    uri: `${KONTENT_GQL_ENDPOINT}/${KONTENT_PROJECT_ID}`,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${process.env.KONTENT_PREVIEW_KEY}`,
      'X-KC-Wait-For-Loading-New-Content': 'true',
    },
  });

  const { data } = await client.query({
    query: gql`
      query MyQuery {
        wshomepage(codename: "homepage") {
          _system_ {
            id
          }
          content {
            html
            components {
              items {
                ... on Sectionhero {
                  __typename
                  firstLine
                  secondLine
                  taglines {
                    items {
                      whatIsIt
                    }
                  }
                  _system_ {
                    codename
                  }
                }
                ... on Sectionbio {
                  __typename
                  bios {
                    items {
                      text {
                        html
                      }
                      type {
                        items {
                          _system_ {
                            codename
                          }
                        }
                      }
                    }
                  }
                  socialLinks {
                    items {
                      platform {
                        items {
                          _system_ {
                            codename
                            name
                          }
                        }
                      }
                      link
                      _system_ {
                        codename
                      }
                    }
                  }
                  photos {
                    items {
                      url
                      description
                      renditions {
                        items {
                          query
                        }
                      }
                    }
                  }
                  _system_ {
                    codename
                  }
                }
                ... on Sectionteaching {
                  __typename
                  headline
                  description {
                    html
                  }
                  teachingPlatforms {
                    items {
                      title
                      description {
                        html
                      }
                      link
                      logo {
                        url
                      }
                      _system_ {
                        name
                      }
                    }
                  }
                  _system_ {
                    codename
                  }
                }
                ... on Sectionnewsletter {
                  __typename
                  description {
                    html
                  }
                  headline
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
};

const Home: React.FC<any> = ({ data }) => {
  const resolveLinkedItem = (
    linkedItem: any,
    domNode: any,
    domToReact: any,
  ) => {
    switch (linkedItem?.__typename) {
      case 'Sectionhero':
        return <Hero data={linkedItem}></Hero>;
      case 'Sectionbio':
        return <Bio data={linkedItem}></Bio>;
      case 'Sectionteaching':
        return <Teaching data={linkedItem}></Teaching>;
      case 'Sectionnewsletter':
        return <Newsletter data={linkedItem}></Newsletter>;
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>A Very Jason Lengstorf Website — Powered By Boops!</title>
      </Head>

      <Menu />

      <main
        className="home"
        data-kontent-item-id={data.wshomepage._system_.id}
        data-kontent-element-codename="content"
      >
        <RichTextComponent
          richTextElement={data.wshomepage.content}
          mappings=""
          resolveLinkedItem={resolveLinkedItem}
          resolveImage=""
          resolveLink=""
          resolveDomNode=""
          className=""
        />
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
