import { ProblemDetailPage } from "@/views/problem-detail-page";

export default async function ProblemDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProblemDetailPage problemId={id} />;
}
