const HotelValidation = (hotelData) => {
    var hotelErrors = ''
    if (!hotelData.hotelName) {
        hotelErrors = 'Please enter the Hotel Name'
    } else if (!hotelData.locality) {
        hotelErrors = 'Please enter the Locality'
    } else if (!hotelData.hotelType) {
        hotelErrors = 'Please enter the Hotel Type'
    }
    return hotelErrors
}
export default HotelValidation