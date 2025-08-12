const EachSkill = ({ category, technologies }) => {
  return (
    <li className="bg-card-glass hover-glow-accent p-6 space-y-4">
      <p className="font-semibold text-lg mb-4">{category}</p>
      <ul className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <li
            key={index}
            className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default font-medium"
          >
            {tech}
          </li>
        ))}
      </ul>
    </li>
  )
}
export default EachSkill
