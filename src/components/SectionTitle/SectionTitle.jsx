
const SectionTitle = ({title, subTitle}) => {
  return (
    <div className="text-center bg-gradient-to-r bg-slate-100 md:mx-20 mx-2 rounded-xl py-1 font-roboto">
        <h3 className="text-2xl font-extrabold  uppercase">------- {title} -------</h3>
        <p className="font-semibold my-1">------- {subTitle} -------</p>
    </div>
  )
}

export default SectionTitle