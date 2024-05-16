
const SectionTitel = ({subHeading,heading}) => {
    return (
        <div className="w-4/12 mx-auto text-center space-y-2 mt-10">
            <p className="text-yellow-600">{subHeading}</p>
            <p className="text-3xl border-y-4 py-3">{heading}</p>
        </div>
    );
};

export default SectionTitel;