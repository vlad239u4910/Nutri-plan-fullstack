import { CategoryCards } from "./_componenets/category-cards";
import { CategoryFormDialog } from "./_componenets/category-form-dialog";

const Page = () => {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Categories List</h1>
        <CategoryFormDialog />
      </div>
      <CategoryCards />
    </>
  );
};

export default Page;
