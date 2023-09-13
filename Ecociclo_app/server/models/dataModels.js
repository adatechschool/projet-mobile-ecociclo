import mongoose from 'mongoose';

const marketAndRecycleSchema = new mongoose.Schema({
    ardt: { type: Number, required: true },
    timeD: { type: String, required: true },
    timeF: { type: String, required: true },
    nom: { type: String, required: true },
    adresse: { type: String, required: true },
    ouverture: { type: String, required: true },
    tag: { type: String, required: true },
    // id: { type: Number, required: true }
});


const MarketAndRecycle = mongoose.model('MarketAndRecycle', marketAndRecycleSchema);

export default MarketAndRecycle;
