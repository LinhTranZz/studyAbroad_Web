import FooterDemo from "../../../components/Footer/footer";
export const revalidate = 0;
const TruongHocLayout = async ({
  children: children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        {children}
        <FooterDemo />
      </div>
    </div>
  );
};

export default TruongHocLayout;