const BandList = ({ bands }) => (
  <div>
    {bands.map((band) => (
      <div key={band.id} className="band-card">
        <h3 className="band-name">{band.name}</h3>
        <p className="band-founded">Founded: {band['life-span']?.begin}</p>
      </div>
    ))}
  </div>
);

export default BandList;
