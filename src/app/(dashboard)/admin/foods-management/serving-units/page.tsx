import { ServingUnitCards } from "./_components/serving-unit-cards";
import { ServingUnitFormDialog } from "./_components/serving-unit-form-dialog";

const Page = () => {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Serving Units List</h1>
        <ServingUnitFormDialog />
      </div>
      <ServingUnitCards />
    </>
  );
};

export default Page;
