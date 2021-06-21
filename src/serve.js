import { serve } from './routes/routes.js';

import { connectElephantSQL } from './connection/elephantSql.js';
// Database connection
connectElephantSQL();

const PORT = 3000;

serve.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`)
})

