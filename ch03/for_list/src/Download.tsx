import dl_icon from './image/dl.png'

export default function Download({ slug }: { slug: string }) {
    return (
        <a href={`https://github.com/wikibook/${slug}/`}>
            <img src={dl_icon} alt="Sample Download" />
        </a>
    )
}