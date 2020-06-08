import { Document, Model, model, Schema } from 'mongoose';

export const DataSchema: Schema = new Schema({
});

interface DataModel extends DataType , Document { }

interface DataModelStatic extends Model <DataModel> { }

export const Data: Model<DataModel> = model<DataModel, DataModelStatic>('Data', DataSchema);
