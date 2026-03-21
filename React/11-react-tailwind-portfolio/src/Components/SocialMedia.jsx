const SocialMedia = ({icon,title,url}) => {
  return <a href={url} className="flex text-blue-600 mb-1 hover:text-blue-800">{icon} <span className="ml-4">{title}</span></a> 
}

export default SocialMedia;