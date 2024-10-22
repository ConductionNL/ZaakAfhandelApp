// The store script handles app wide variables (or state), for the use of these variables and there governing concepts read the design.md
import pinia from '../pinia.js'
import { useNavigationStore } from './modules/navigation.js'
import { useZaakStore } from './modules/zaken.ts'
import { useZaakTypeStore } from './modules/zaakTypen.js'
import { useKlantStore } from './modules/klanten.js'
import { useTaakStore } from './modules/taak.js'
import { useBerichtStore } from './modules/berichten.js'
import { useRolStore } from './modules/rol.js'

const navigationStore = useNavigationStore(pinia)
const zaakStore = useZaakStore(pinia)
const zaakTypeStore = useZaakTypeStore(pinia)
const klantStore = useKlantStore(pinia)
const taakStore = useTaakStore(pinia)
const berichtStore = useBerichtStore(pinia)
const rolStore = useRolStore(pinia)

export {
	navigationStore,
	zaakStore,
	zaakTypeStore,
	klantStore,
	taakStore,
	berichtStore,
	rolStore,
}
