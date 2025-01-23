import { loadOBJModel } from "../../utils/ObjectLoader"
/**
 * Adds the human.obj to the given scene
 *
 * @param {Three.Scene} scene
 */
export function addNpc(scene) {
	loadOBJModel("assets/models/human.obj").then((model) => {
		model.scale.set(0.063, 0.063, 0.063)
		model.position.set(1, 0, 1)
		console.log(model.scale)

		scene.add(model)
		/**
		 * TODO:
		 * Hier kanns gerne weiter gehen
		 * Das positionieren und scalen des/der NPC's sollte
		 * im interior passieren. Somit können größe und
		 * Position individuel angepasst werden.
		 * Außerdem sollten mindestens 3 Npc's gespaned werden
		 * Eine Texturierung(grau soll reichen) währe auch nocht ganz Nett.
		 * Obwohl so ein Texture loader nathürlich auch was hätte :)
		 */
	})
}
