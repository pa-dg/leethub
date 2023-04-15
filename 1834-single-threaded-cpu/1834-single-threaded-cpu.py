class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        for i, t in enumerate(tasks):
            t.append(i)
        tasks.sort(key = lambda task: task[0])
        
        res, minHeap = [], []
        i, time = 0, tasks[0][0]
        
        while minHeap or i < len(tasks):
            while i < len(tasks) and time >= tasks[i][0]:
                heapq.heappush(minHeap, [tasks[i][1], tasks[i][2]])
                i += 1
                
            if not minHeap:
                time = tasks[i][0]
            else:
                procTime, idx = heapq.heappop(minHeap)
                time += procTime
                res.append(idx)
        
        return res
        
        
        
        
# sort tasks by enqueueTime, and appending to the task arr the original index
# init res array which will contain the index that represents the order of tasks processed, minHeap array which will contain the queue tasks by enqueueTime/processTime
# init i to represent the first task to process at index 0, current task added to minHeap
# init time to represent the first enqueueTime (smallest enqueue at sorted tasks)
# while there are tasks in minHeap or still tasks -- continue pushing [task processTime, task index] to minHeap while there are still tasks and tasks enqueueTime <= current time, increment i after pushing a task in minHeap
# add condition IF theres nothing on queue in the minHeap, fast forward time to the next task enqueue, ELSE taks processsed on minHeap, arr destructure to processTime, index, take index and append to res arr

        