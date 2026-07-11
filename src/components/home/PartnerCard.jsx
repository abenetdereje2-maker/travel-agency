const PartnerCard = ({ partner }) => {
  return (
    <div className="group flex h-36 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-14 w-auto grayscale transition duration-300 group-hover:grayscale-0 group-hover:scale-110"
      />
    </div>
  );
};

export default PartnerCard;