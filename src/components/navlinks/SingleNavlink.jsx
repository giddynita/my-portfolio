import AnchorLink from 'react-anchor-link-smooth-scroll'

const SingleNavlink = ({ navlink, activeSection }) => {
  const { section, href } = navlink
  return (
    <AnchorLink
      href={href}
      className={`relative px-3 py-2 text-sm font-medium transition-colors ${
        activeSection === section
          ? 'text-primary'
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {section}
      {activeSection === section && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-primary rounded-full" />
      )}
    </AnchorLink>
  )
}
export default SingleNavlink
