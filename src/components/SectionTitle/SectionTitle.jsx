
const SectionTitle = ({title, subTitle}) => {
  return (
    <div className="text-center bg-gradient-to-r from-orange-500  to-pink-500 mx-20 rounded-xl py-1 font-roboto">
        <h3 className="text-2xl font-extrabold text-white">---------- {title} ----------</h3>
        <p className="font-semibold text-white my-1">---------- {subTitle} ----------</p>
    </div>
  )
}

export default SectionTitle