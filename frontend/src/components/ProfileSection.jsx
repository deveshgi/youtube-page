const ProfileSection = ({
  title,
  children
}) => {
  return (
    <section className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-5">
        {title}
      </h2>

      {children}

    </section>
  );
};

export default ProfileSection;