import PageTitle from "@/components/PageTitle";
import React from "react";
import PageContainer from "./components/PageContainer";

interface OrderNumberPageProps {
  params: { id: string };
}

const OrderNumberPage = ({ params }: OrderNumberPageProps) => {
  return (
    <div>
      <PageTitle title={`order ${params.id}`} />
      <PageContainer orderId={params.id} />
    </div>
  );
};

export default OrderNumberPage;
