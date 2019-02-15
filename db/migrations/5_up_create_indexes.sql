CREATE UNIQUE INDEX users_email ON users(email);
CREATE INDEX articles_author_id ON articles(author_id);
CREATE UNIQUE INDEX tags_name ON tags(name);
CREATE UNIQUE INDEX taggings_article_id_tag_id ON taggings(article_id, tag_id);
CREATE INDEX taggings_tag_id ON taggings(tag_id);
