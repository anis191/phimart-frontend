
const CategoriesSkeletons = () => {
    return (
        <div className="flex w-48 flex-col gap-3"> {/* reduced width & gap */}
            <div className="flex items-center gap-3">
                <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div> {/* smaller avatar */}
                <div className="flex flex-col gap-2">
                    <div className="skeleton h-3 w-16"></div> {/* shorter text lines */}
                    <div className="skeleton h-3 w-24"></div>
                </div>
            </div>
            <div className="skeleton h-24 w-full"></div> {/* shorter box */}
        </div>
    );
};
export default CategoriesSkeletons;