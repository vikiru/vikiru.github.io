import type { ReactNode } from 'react';

type HelmetMetaProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export default function HelmetMeta({ title, description, children }: HelmetMetaProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {children}
    </>
  );
}
