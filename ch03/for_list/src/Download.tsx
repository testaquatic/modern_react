import dl_icon from "/dl.png"

export default function Download({slug}: React.PropsWithChildren & {slug: string;}) {
    return (
        <a href={`https://github.com/wikibook/${slug}`}><img src={dl_icon} alt="Sample Download" /></a>
    )
}