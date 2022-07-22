import {RefObject} from "react"
import {useDrop} from "react-dnd"
import {reorderWeather} from "store/features/weather/weatherSlice"
import {useAppDispatch} from "store/hooks"

type DragItemType = { id: string, index: number }

const useHandleHover = (index: number, ref: RefObject<DocumentFragment>, type: string) => {
	const dispatch = useAppDispatch()
	
	const [, drop] = useDrop(() => ({
			accept: type,
			hover: (item: DragItemType) => {
				if (!ref.current) {
					return
				}
				
				const hoverIndex = index
				const dragIndex = item.index
				
				if (dragIndex === hoverIndex) {
					return
				}
				
				dispatch(reorderWeather({dragIndex, dropIndex: hoverIndex}))
				item.index = hoverIndex
			}
		})
		, [index])
	
	return {drop}
}

export {useHandleHover}