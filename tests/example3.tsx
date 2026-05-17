export function Content({ title }: { title?: string }) {
  return <span title={title}>Content</span>;
}

export function withTitle() {
  return <Content title="has title" />;
}
export function withoutTitle() {
  return <Content />;
}
