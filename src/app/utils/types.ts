export type PageProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type Topic = {
  id: number;
  category: string;
  title: string;
  tags: string[];
};