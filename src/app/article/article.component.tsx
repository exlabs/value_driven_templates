import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Image } from '../../ui/md-components/image/image.component';
import { ArticleAside } from './article-aside/article-aside.component';
import { useDeviceDetect } from '../../hooks/use-device-detect/use-device-detect.hook';
import { Author } from '../../ui/author/author.component';
import {
  StyledArticle,
  StyledHeader,
  InformationContainer,
  StyledContent,
  MarkdownContainer,
} from './article.styles';

interface ArticleProps {
  title: string;
  imageUrl: string;
  publishDate: Date;
  content: string;
  author: {
    name: string;
    img: string;
  };
}

export const Article = ({
  title,
  imageUrl,
  publishDate,
  content,
  author,
}: ArticleProps) => {
  const { isMobile } = useDeviceDetect();

  return (
    <StyledArticle className="article">
      <StyledHeader style={{ backgroundImage: `url("${imageUrl}")` }}>
        <p className="category">Development</p>
        <h2 className="title">{title}</h2>
        <InformationContainer>
          <Author img={author.img} name={`By ${author.name}`} />
          <p className="publish-date">{new Date().toDateString()}</p>
        </InformationContainer>
      </StyledHeader>
      <StyledContent>
        <MarkdownContainer>
          <ReactMarkdown
            source={content}
            renderers={{
              image: Image,
            }}
          />
        </MarkdownContainer>
        {!isMobile && <ArticleAside />}
      </StyledContent>
      {isMobile && <ArticleAside />}
    </StyledArticle>
  );
};
