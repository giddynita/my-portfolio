import { useContext } from 'react'
import { IoMdSettings } from 'react-icons/io'
import { GlobalContext } from '../assets/globalContext'

const Theme = () => {
  const { themeContainer, openThemeContainer, handleTheme } =
    useContext(GlobalContext)

  return (
    <div
      className="fixed top-1/2 right-0 z-50 theme"
      style={{
        transform: themeContainer ? 'translateX(0)' : 'translateX(100%)',
      }}
    >
      <div className="relative bg-gray-200 p-3">
        <h6 className="text-xs text-black/80 border-b pb-3 ">Color Switcher</h6>
        <div className="grid grid-cols-4 place-items-center w-3/4 gap-y-1.5 my-3">
          <button
            type="button"
            className="w-4 h-4 bg-emerald-500 rounded-full"
            onClick={() => {
              handleTheme('emerald')
            }}
          />
          <button
            type="button"
            className="w-4 h-4 bg-red-300 rounded-full"
            onClick={() => {
              handleTheme('retro')
            }}
          />
          <button
            type="button"
            className="w-4 h-4 bg-blue-400 rounded-full"
            onClick={() => {
              handleTheme('cmyk')
            }}
          />
          <button
            type="button"
            className="w-4 h-4 bg-purple-300 rounded-full"
            onClick={() => {
              handleTheme('pastel')
            }}
          />
          <button
            type="button"
            className="w-4 h-4 bg-fuchsia-400 rounded-full"
            onClick={() => {
              handleTheme('synthwave')
            }}
          />
          <button
            type="button"
            className="w-4 h-4 bg-pink-400 rounded-full"
            onClick={() => {
              handleTheme('dracula')
            }}
          />
          <button
            type="button"
            className="w-4 h-4 bg-amber-500 rounded-full"
            onClick={() => {
              handleTheme('coffee')
            }}
          />
          <button
            type="button"
            className="w-4 h-4 bg-cyan-700 rounded-full"
            onClick={() => {
              handleTheme('business')
            }}
          />
        </div>
        <button
          className="text-xs bg-primary text-white w-full pb-1 py-0.5 p-3 hover:text-primary-content"
          onClick={() => {
            handleTheme('')
          }}
        >
          Reset Default Teal
        </button>
        <button
          type="button"
          className=" absolute right-full top-0 z-50 p-1.5 text-lg text-white rounded-l hover:text-secondary bg-gray-500"
          onClick={openThemeContainer}
        >
          <IoMdSettings />
        </button>
      </div>
    </div>
  )
}
export default Theme
