from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from sse_starlette.sse import EventSourceResponse
import asyncio
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/stream")
async def message_stream(response: Response):
    async def event_generator():
        words = "Hello! I'm an AI assistant. How can I help you today?".split()
        while True:  # creates an infinite loop
            for word in words:
                await asyncio.sleep(0.5)  # Simulate processing time
                yield json.dumps({"content": word + " "})
            # Add a longer pause between repetitions
            await asyncio.sleep(1)

    return EventSourceResponse(event_generator())

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)