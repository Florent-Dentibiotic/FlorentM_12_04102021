import calories from '../assets/calories-icon.png'
import protein from '../assets/protein-icon.png'
import carbs from '../assets/carbs-icon.png'
import fat from '../assets/fat-icon.png'
import useFetch from '../services/UserService'
import { useParams } from 'react-router'

/**
 * Setting up KeyData framework and deploying datas if loaded
 * @param { number } id
 * @param { keyData } object
 * @param { isLoaded } booleen
 * @param { error } booleen
 * @return { KeyChart }
 */

function KeyData() {
    const { id } = useParams()
    const { keyData, isLoaded, error } = useFetch(id)
    if (!error & isLoaded) {
        return (
            <>
                <div className="bg-gray-50 rounded-md flex justify-around items-center">
                    <img src={calories} alt="calories" className="w-20" />
                    <div className="w-32">
                        <p className="text-xl font-bold">
                            {keyData.calorieCount} kCal
                        </p>
                        <p className="text-gray-500">Calories</p>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-md flex items-center justify-around">
                    <img src={protein} alt="protein" className="w-20" />
                    <div className="w-32">
                        <p className="text-xl font-bold">
                            {keyData.proteinCount} g
                        </p>
                        <p className="text-gray-500">Protéines</p>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-md flex items-center justify-around">
                    <img src={carbs} alt="apple" className="w-20" />
                    <div className="w-32">
                        <p className="text-xl font-bold">
                            {keyData.carbohydrateCount} g
                        </p>
                        <p className="text-gray-500">Glucides</p>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-md flex items-center justify-around">
                    <img src={fat} alt="hamburger" className="w-20" />
                    <div className="w-32">
                        <p className="text-xl font-bold">
                            {keyData.lipidCount} g
                        </p>
                        <p className="text-gray-500">Lipides</p>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="bg-gray-50 rounded-md flex justify-around items-center">
                    <img src={calories} alt="calories" className="w-20" />
                    <div className="w-32">
                        <p className="text-xl font-bold">kCal</p>
                        <p className="text-gray-500">Calories</p>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-md flex items-center justify-around">
                    <img src={protein} alt="protein" className="w-20" />
                    <div className="w-32">
                        <p className="text-xl font-bold">g</p>
                        <p className="text-gray-500">Protéines</p>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-md flex items-center justify-around">
                    <img src={carbs} alt="apple" className="w-20" />
                    <div className="w-32">
                        <p className="text-xl font-bold">g</p>
                        <p className="text-gray-500">Glucides</p>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-md flex items-center justify-around">
                    <img src={fat} alt="hamburger" className="w-20" />
                    <div className="w-32">
                        <p className="text-xl font-bold">g</p>
                        <p className="text-gray-500">Lipides</p>
                    </div>
                </div>
            </>
        )
    }
}

export default KeyData
